output "webappurl" {
  value = azurerm_linux_web_app.webapp1.default_hostname
}

output "webappurl" {
  value = azurerm_linux_web_app.webapp1.outbound_ip_addresses
}
