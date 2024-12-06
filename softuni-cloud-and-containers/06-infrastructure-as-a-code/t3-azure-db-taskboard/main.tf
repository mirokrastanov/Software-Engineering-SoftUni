terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.11.0"
    }
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
  location = "Italy North"
  name     = "TaskBoard-${random_integer.rng1.result}"
}

resource "azurerm_service_plan" "asp1" {
  name                = "TaskBoard-ServicePlan-${random_integer.rng1.result}"
  resource_group_name = azurerm_resource_group.res1.name
  location            = azurerm_resource_group.res1.location
  os_type             = "Linux"
  sku_name            = "F1"
}

resource "azurerm_mssql_server" "sqlserver1" {
  name = "TaskBoard-SQLServer-${random_integer.rng1.result}"
  resource_group_name = azurerm_resource_group.res1.name
  location = azurerm_resource_group.res1.location
  version = "12.0"
  administrator_login = "4dm1n157r470r"
  administrator_login_password = "4-v3ry-53cr37-p455w0rd"
}

resource "azurerm_mssql_database" "sqldb1" {
  name = "TaskBoard-SQLDatabase-${random_integer.rng1.result}"
  server_id = azurerm_mssql_server.sqlserver1.id
  collation = "SQL_Latin1_General_CP1_CI_AS"
  license_type = "LicenseIncluded"
  max_size_gb = 2
  zone_redundant = 0
  sku_name = "S0"
}

resource "azurerm_linux_web_app" "webapp1" {
  name                = "TaskBoard-WebApp-${random_integer.rng1.result}"
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
    name = "DefaultConnection"
    type = "SQLAzure"
    value = "Data Source=tcp:${azurerm_mssql_server.sqlserver1.fully_qualified_domain_name},1433;Initial Catalog=${azurerm_mssql_database.sqldb1.name};User ID=${azurerm_mssql_server.sqlserver1.administrator_login};Password=${azurerm_mssql_server.sqlserver1.administrator_login_password};Trusted_Connection=False; MultipleActiveResultSets=True;"
  }
}

resource "azurerm_mssql_firewall_rule" "firewallrule1" {
  name = "TaskBoard-FirewallRule-${random_integer.rng1.result}"
  server_id = azurerm_mssql_server.sqlserver1.id
  start_ip_address = "0.0.0.0"
  end_ip_address = "0.0.0.0"
}

resource "azurerm_app_service_source_control" "sourcecontrol1" {
  app_id                 = azurerm_linux_web_app.webapp1.id
  repo_url               = "the url of the repo with the App Files (currently in the local folder for this exercise)"
  branch                 = "main"
  use_manual_integration = true
  // manual integration = false, if it's my repo for github action
}
