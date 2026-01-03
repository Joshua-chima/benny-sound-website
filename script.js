// WhatsApp Order
function openWhatsApp() {
  let phone = "+2348133718214";
  let message = encodeURIComponent("Hello Benny Sound Pro, I want to place an order.");
  window.open(https://wa.me/${phone}?text=${message}, "_blank");
}

// Contact Form Order
function sendOrder() {
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let service = document.getElementById('service').value;

  if(name && phone && service){
    let whatsappMessage = encodeURIComponent(Order from Website:\nName: ${name}\nPhone: ${phone}\nService: ${service});
    window.open(https://wa.me/+2348133718214?text=${whatsappMessage}, "_blank");
    alert("Your order is being sent to WhatsApp!");
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('service').value = '';
  } else {
    alert("Please fill in all fields!");
  }
}