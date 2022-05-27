using System.ComponentModel.DataAnnotations;
namespace PoliceSystemApi.Models
{
    public class PoliceSystem
    {
        public int id { get; set; }
        [Required]
         public string? emri { get; set; }
        [Required]
         public string? mbiemri { get; set; }
    }
}
