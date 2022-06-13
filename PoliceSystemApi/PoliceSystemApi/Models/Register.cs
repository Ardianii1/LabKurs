using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace PoliceSystemApi.Models
{
    public class Register
    {
        [Key]
        public int id { get; set; }
        
        public string? emri { get; set; }
        
        public string? mbiemri { get; set; }

        public string? email { get; set; }
        public string? password { get; set; }
        public int? nrtel { get; set; }
        public string? gjinia { get; set; }


    }

}
