using System.ComponentModel.DataAnnotations;

namespace PoliceSystemApi.Models
{
    public class Stafi
    {
        public int Id { get; set; } 
        [Required]
        public string Emri { get; set; } = string.Empty;
        [Required]
        public string Mbiemri { get; set; } = string.Empty;
        public DateTime Registered { get; set; }
        
    }

    public enum Priority
    {
        Low, Medium, High
    }

    public enum StafiType
    {
        Feature, Bug, Documentation
    }
}
