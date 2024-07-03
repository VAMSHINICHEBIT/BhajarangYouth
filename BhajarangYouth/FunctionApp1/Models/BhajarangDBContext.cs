using System.Data.Entity;

namespace FunctionApp1.Models
{
    public class BhajarangDBContext : DbContext
    {
        public BhajarangDBContext(string ConnectionString) : base(ConnectionString)
        { 
        
        }
        public DbSet<RegisterModel> registerModel { get; set; }

        protected override void OnModelCreating(DbModelBuilder ModelBuilder)
        {
            ModelBuilder.Entity<RegisterModel>().HasKey(x => x.UserID);
        }
    }
}
