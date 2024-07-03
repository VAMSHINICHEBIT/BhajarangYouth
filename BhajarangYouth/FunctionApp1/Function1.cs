using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using FunctionApp1.Models;
using FunctionApp1.Workflows;

namespace FunctionApp1
{
    public  class Function1
    {
        private readonly MasterClass _masterClass;
        public Function1(MasterClass masterClass) 
        {
            _masterClass = masterClass;
        }
        [FunctionName("Register")]
        public  async Task<IActionResult> Register(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            RegisterModel data = JsonConvert.DeserializeObject<RegisterModel>(requestBody);

            data = _masterClass.RegisterModel(data);

            return new OkObjectResult(data);
        }

        [FunctionName("Login")]
        public async Task<IActionResult> Login(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string name = req.Query["UserName"];
            string password = req.Query["Password"];


            RegisterModel data = _masterClass.UserLogin(name, password);

            return new OkObjectResult(data);
        }
    }
}