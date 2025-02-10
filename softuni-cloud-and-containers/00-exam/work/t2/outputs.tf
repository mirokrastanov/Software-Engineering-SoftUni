output "web_app_url" {
  value       = azurerm_linux_web_app.wapp.default_hostname
  description = "The URL of the web app"
}

output "web_app_ips" {
  #   value = azurerm_linux_web_app.wapp.outbound_ip_addresses
  value       = azurerm_linux_web_app.wapp.outbound_ip_address_list
  description = "The IP addresses of the web app"
}
