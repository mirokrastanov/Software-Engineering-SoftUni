terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.11.0"
    }
  }
  backend "azurerm" {
    resource_group_name  = "StorageRG"
    storage_account_name = "taskboardstorageunique"
    container_name       = "taskboardstoragecontainer"
    key                  = "terraform.tfstate"
  }
}

provider "azurerm" {
  subscription_id = "your_subscription_id"
  features {

  }
}

resource "random_integer" "rng1" {
  min = 10000
  max = 99999
}

resource "azurerm_resource_group" "res1" {
  location = var.resource_group_location
  name     = "${var.resource_group_name}-${random_integer.ri.result}"
}

resource "azurerm_service_plan" "asp1" {
  name                = "${var.app_service_plan_name}-${random_integer.ri.result}"
  resource_group_name = azurerm_resource_group.res1.name
  location            = azurerm_resource_group.res1.location
  os_type             = "Linux"
  sku_name            = "F1"
}

resource "azurerm_mssql_server" "sqlserver1" {
  name                         = "${var.sql_server_name}-${random_integer.ri.result}"
  resource_group_name          = azurerm_resource_group.res1.name
  location                     = azurerm_resource_group.res1.location
  version                      = "12.0"
  administrator_login          = var.sql_user
  administrator_login_password = var.sql_user_pass
}

resource "azurerm_mssql_database" "sqldb1" {
  name           = "${var.sql_database_name}-${random_integer.ri.result}"
  server_id      = azurerm_mssql_server.sqlserver1.id
  collation      = "SQL_Latin1_General_CP1_CI_AS"
  license_type   = "LicenseIncluded"
  max_size_gb    = 2
  zone_redundant = 0
  sku_name       = "S0"
}

resource "azurerm_linux_web_app" "webapp1" {
  name                = "${var.app_service_name}-${random_integer.ri.result}"
  resource_group_name = azurerm_resource_group.res1.name
  location            = azurerm_resource_group.res1.location
  service_plan_id     = azurerm_service_plan.asp1.id
  site_config {
    application_stack {
      dotnet_version = "6.0"
    }
    always_on = false
  }
  connection_string {
    name  = "DefaultConnection"
    type  = "SQLAzure"
    value = "Data Source=tcp:${azurerm_mssql_server.sqlserver1.fully_qualified_domain_name},1433;Initial Catalog=${azurerm_mssql_database.sqldb1.name};User ID=${azurerm_mssql_server.sqlserver1.administrator_login};Password=${azurerm_mssql_server.sqlserver1.administrator_login_password};Trusted_Connection=False; MultipleActiveResultSets=True;"
  }
}

resource "azurerm_mssql_firewall_rule" "firewallrule1" {
  name             = "${var.firewall_rule_name}-${random_integer.ri.result}"
  server_id        = azurerm_mssql_server.sqlserver1.id
  start_ip_address = "0.0.0.0"
  end_ip_address   = "0.0.0.0"
}

resource "azurerm_app_service_source_control" "sourcecontrol1" {
  app_id                 = azurerm_linux_web_app.webapp1.id
  repo_url               = var.github_repo
  branch                 = "main"
  use_manual_integration = true
  // manual integration = false, if it's my repo for github action
}
