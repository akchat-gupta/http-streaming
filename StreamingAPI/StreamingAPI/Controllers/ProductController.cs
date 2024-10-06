using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StreamingAPI.Data;

namespace StreamingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public ProductController(DataContext context)
        {
            _dataContext = context;
        }

        [HttpGet("stream")]
        public async Task GetProductStream()
        {
            Response.ContentType = "text/event-stream";

            await foreach (var product in _dataContext.Products.AsAsyncEnumerable())
            {
                var productData = System.Text.Json.JsonSerializer.Serialize(product);
                await Response.WriteAsync($"data: {productData}\n\n");
                await Response.Body.FlushAsync();
                await Task.Delay(500);
            }
        }
    }
}
