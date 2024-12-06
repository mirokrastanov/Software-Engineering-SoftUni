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
  location = "West_Europe"
  name     = "ContactBook-${random_integer.rng1.result}"
}

resource "azurerm_service_plan" "asp1" {
  name                = "ContactBook-ServicePlan-${random_integer.rng1.result}"
  resource_group_name = azurerm_resource_group.res1.name
  location            = azurerm_resource_group.res1.location
  os_type             = "Linux"
  sku_name            = "F1"
}

resource "azurerm_linux_web_app" "webapp1" {
  name                = "ContactBook-WebApp-${random_integer.rng1.result}"
  resource_group_name = azurerm_resource_group.res1.name
  location            = azurerm_resource_group.res1.location
  service_plan_id     = azurerm_service_plan.asp1.id
  site_config {
    application_stack {
      node_version = "16-lts"
    }
    always_on = false
  }
}

resource "azurerm_app_service_source_control" "sourcecontrol1" {
  app_id                 = azurerm_linux_web_app.webapp1.id
  repo_url               = "https://github.com/nakov/ContactBook"
  branch                 = "main"
  use_manual_integration = true
  // manual integration = false, if it's my repo for github action
}
