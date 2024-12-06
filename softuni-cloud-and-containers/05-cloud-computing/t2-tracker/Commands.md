1. Install Azure CLI -> Admin Powershell -> `$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi`
2. Confirm -> `az --version`
3. `cd` into project directory
4. Create docker image -> `docker build -t tracker-app .`
5. `docker ls` to list docker images
6. Run container -> `docker run -d -p 80:80 tracker-app`
7. `docker ps`
8. Create an Azure registry via the Azure CLI
9. `az login`
10. Create a resource group
11. `az group create --name trackerapp1 --location italynorth`
12. Create a container registry
13. `az acr create --resource-group trackerapp1 --name trackerapp1cr --sku Basic`
14. Log into container registry
15. `az acr login --name trackerapp1cr`
16. Obtain full registry address
17. Show all properties -> `az acr show --name trackerapp1cr`
18. To filter the registry -> `az acr show --name trackerapp1cr --query loginServer --output table`
19. The address shown would play the role of a domain pre-fix for the future containers built for this project -> i.e. `cr-address/` + `random-ctr-name` -> similar to the dockerhub convention `testuser324/project182`
20. Tag (rename) the docker image created in step 4
21. `docker tag tracker-app ` + the resulting address from step 19 + `:1` -> sample new name -> `trackerapp.azurecr.i` v1
22. `docker images`
23. Publich the docker image into the Azure Container Registry
24. `docker push trackerapp1.azurecr.io/tracker-app:v1`
25. Check the result
26. `az acr repositoriy list --name trackerapp1cr`
27. Create a Service Principal (via powershell)
28. `$ACR_NAME='trackerapp1cr'`
29. `echo $ACR_NAME` -> to confirm
30. `$SERVICE_PRINCIPAL_NAME='trackerapp1cp'`
31. `az acr show --name $ACR_NAME --query "id" --output tsv` -> to get container registry id
32. `$ACR_REGISTRY_ID=$(az acr show --name $ACR_NAME --query "id" --output tsv)` -> to store it in a variable
33. `echo $ACR_REGISTRY_ID` -> to confirm
34. `$PASSWORD=$(az ad sp create-for-rbac --name $SERVICE_PRINCIP_NAME --scopes $ACR_REGISTRY_ID --role acrpull --query "password" --output tsv)` -> to create the principal using those variables
35. `echo $PASSWORD` -> to confirm
36. Confirm the creation of the Service Principal via the Azure Portal too -> App Registrations -> The created one should be listed there.
37. `$USER_NAME=$(az ad sp list --display-name $SERVICE_PRINCIPAL_NAME --query "[].appId" --output tsv)`
38. `echo $USER_NAME` -> should display the Service Princip ID string
39. Deploy a container and run the app on it
40. `az container create --resource-group <resource-group-name> --name <container-name> --image <acrLoginServer>/<image-name>:v1 --cpu 1 --memory 1 --registry-login-server <acrLoginServer> --registry-username <service-principal-ID> --registry-password <service-principal-password> --ip-address Public --dns-name-label <aciDnsLabel> --os-type Linux --ports 80` -> Username and Password should be replace with the variable names as they exist and can be accessed without hard-coding their values
41. View container deployment state
42. `az container show --resource-group <resource-group-name> --name <container-name>`
43. Or filtered view per property name
44. `az container show --resource-group <resource-group-name> --name <container-name> --query instanceView.state`
45. Finally to view the domain name `fqdn`
46. `az container show --resource-group <resource-group-name> --name <container-name> --query ipAddress.fqdn`
47. To view logs
48. `az container logs --resource-group <resource-group-name> --name <container-name>`
