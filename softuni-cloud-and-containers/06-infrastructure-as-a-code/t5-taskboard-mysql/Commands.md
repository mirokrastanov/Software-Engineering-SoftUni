1. Add to github -> public repository
2. In the Azure portal -> Create a new `Web App + Database` project
3. Configurate `.NET 6(LTS)` & `SQL Azure`
4. Write down server name and database name
5. Select `Italy North` for deployment (important - the rest are very slow on the student plan)
6. Confirm and wait for deployment
7. Post deployment -> go to the app service and obtain the deployed domain
8. Evironment values -> Edit connection string
9. Add `MultipleActiveResultSets=true`
10. Deployment -> Deployment Center -> Connect to the GitHub project repository -> Preview and Confirm
11. Confirm on GitHub that the GitHub action for `build and deploy` has been started
12. The website should be running and working correctly. Communication with the database should be working as well and new tasks should be created successfully.