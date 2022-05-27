using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PoliceSystemApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;


namespace PoliceSystemApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StafiController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public StafiController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from stafi";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SqlServer");
            SqlDataReader myReader;
            using (var myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using var myCommand = new SqlCommand(query, myConn);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);
                myReader.Close();
                myConn.Close();
            }
            return new JsonResult(table);
        }



        [HttpGet("{id}")]
        public JsonResult GetbyId(int id)
        {
            string query = @"select * from stafi where id = @Id  ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SqlServer");
            SqlDataReader myReader;
            using (var myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@Id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult(table);
        }



        [HttpPost]
        public object Post(Stafi staf)
        {
            string query = @"insert into stafi (emri , mbiemri) values (@emri, @mbiemri)) ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SqlServer");
            SqlDataReader myReader;
            using (var myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@emri", staf.emri);
                    myCommand.Parameters.AddWithValue("@mbiemri", staf.mbiemri);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }



        [HttpPut]
        public JsonResult Put(Stafi staf)
        {
            string query = @"update stafi 
                             set eemri = @emri, mbiemri = @mbiemri
                              where id = @Id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SqlServer");
            SqlDataReader myReader;
            using (var myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@id", staf.id);
                    myCommand.Parameters.AddWithValue("@emri", staf.emri);
                    myCommand.Parameters.AddWithValue("@mbiemri", staf.mbiemri);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }



        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete stafi 
                             where id = @Id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SqlServer");
            SqlDataReader myReader;
            using (var myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}
