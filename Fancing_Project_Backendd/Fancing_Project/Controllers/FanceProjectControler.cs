using System.Data;
using Fancing_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Fancing_Project.Data;
using Microsoft.AspNetCore.Cors;
namespace Fancing_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Fancing_SMTH")]
    public class FanceProjectControler : ControllerBase
    {

        private readonly DataContext _Context;
        public FanceProjectControler(DataContext _context)
        {
            this._Context = _context;
        }
        [HttpPost]
        public Order PostOrder([FromBody] Order order)
        {
            _Context.Orders.Add(order);
            _Context.SaveChanges();
            return order;
        }
        [HttpGet]
        public ICollection<Order> GetOrders()
        {
            var orders = new List<Order>();
            orders = _Context.Orders.ToList();
            return orders;

        }

    }
}
