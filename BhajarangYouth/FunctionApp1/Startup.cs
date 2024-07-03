using FISS_CommonServiceAPI;
using FunctionApp1.Models;
using FunctionApp1.Workflows;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using System;

[assembly: FunctionsStartup(typeof(Startup))]
namespace FISS_CommonServiceAPI
{
    public class Startup : FunctionsStartup
    {
        //Configure services

        public override void ConfigureAppConfiguration(IFunctionsConfigurationBuilder builder)
        {
            string environment = Environment.GetEnvironmentVariable("Enviroment");
        }
        public override void Configure(IFunctionsHostBuilder builder)
        {
            string ConnectionString = Environment.GetEnvironmentVariable("SQLConnectionString");
            builder.Services.AddScoped<BhajarangDBContext>(provider => new BhajarangDBContext(ConnectionString));

            var logPath = Environment.GetEnvironmentVariable("LogPath");

            //add dependencies examples i.e. 
            builder.Services.AddScoped<MasterClass>();
        }
    }
}
