using System.ComponentModel.DataAnnotations;

namespace Fancing_Project.Models
{
    public class Order
    {
        public int id { get; set; }
        public string Desciption { get; set; }

        public string Address { get; set; }
        [Required]
        [Phone]
        public string PhoneNumber { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
