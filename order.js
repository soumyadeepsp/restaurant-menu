const orderTableBody = document.getElementById('order-table-body');
let orders = JSON.parse(localStorage.getItem('orders'));

for (let i=0; i<orders.length; i++) {
    orderTableBody.innerHTML = orderTableBody.innerHTML + 
    `<tr>
        <td>
            <div class="order-header">
                <span class="order-number">Order #${i+1}</span>
            </div>
        </td>
        <td>
            ${orders[i].map(orderItem => {
                return `<div class="order-details">
                <div class="order-details-item">
                    <span>${orderItem.title}</span>
                    <span>x${orderItem.quantity}</span>
                </div>
            </div>`;
            }).join('')}
        </td>
        <td>
            <div class="order-total">Total: $${orders[i].reduce((acc, orderItem) =>
                 acc + orderItem.price * orderItem.quantity, 0)}</div>
        </td>
        <td>
            <span class="order-status status-delivered">
                Delivered
            </span>
        </td>
    </tr>`;
}

// fetch the query params
const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('email');
console.log(value);
console.log(urlParams);