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

resource "azurerm_resourse_group" "res1" {
  location = "West_Europe"
  name     = "ResourceGroupTerraform"
}
