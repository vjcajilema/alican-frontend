FROM mcr.microsoft.com/mssql/server

ENV MSSQL_SA_PASSWORD w0rdKFC2021
ENV ACCEPT_EULA Y
ENV MSSQL_PID Express

EXPOSE 1433
CMD [ "/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P w0rdKFC2021" ]
CMD [ "CREATE DATABASE back_kfc;" ] 