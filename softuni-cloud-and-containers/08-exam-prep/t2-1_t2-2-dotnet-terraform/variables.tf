variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
}

variable "resource_group_location" {
  description = "The location of the resource group"
  type        = string
}

variable "app_service_plan_name" {
  description = "The name of the app service plan"
  type        = string
}

variable "web_app_name" {
  description = "The name of the app service (web app)"
  type        = string
}

variable "sql_server_name" {
  description = "The name of the server"
  type        = string
}

variable "sql_database_name" {
  description = "The name of the database"
  type        = string
}

variable "sql_admin_login" {
  description = "SQL Username"
  type        = string
}

variable "sql_admin_password" {
  description = "SQL Password"
  type        = string
}

variable "firewall_rule_name" {
  description = "The name of the firewall rule"
  type        = string
}

variable "github_repo" {
  description = "The URL of the GitHub Repo"
  type        = string
}
