using FunctionApp1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FunctionApp1.Workflows
{
    public class MasterClass
    {
        private readonly BhajarangDBContext _bhajarangDBContext;

        public MasterClass(BhajarangDBContext bhajarangDBContext)
        {
            _bhajarangDBContext = bhajarangDBContext;
        }

        public RegisterModel RegisterModel(RegisterModel registerModel) 
        {
            try
            {
                _bhajarangDBContext.registerModel.Add(registerModel);
                _bhajarangDBContext.SaveChanges();
                return registerModel;
            }
            catch (Exception ex)
            {

                throw;
            }
          
        }

        public RegisterModel UserLogin(string userName, string password)
        {
            RegisterModel registerModel = _bhajarangDBContext.registerModel.Where(x => x.Username == userName && x.Password == password).FirstOrDefault();
            return registerModel;
        }
    }
}
