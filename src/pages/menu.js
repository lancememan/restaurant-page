export default function renderMenu() {
    document.getElementById("content").innerHTML = `
    <div id="menu-page" class="background-section">
        <div class="site-width">
            <h1>Meman's Grill Menu</h1>
            <ul class="menu-list">
            <li><span>Grilled Chicken</span> <span>.... $10.99</span></li>
            <li><span>Steak</span> <span>.... $15.99</span></li>
            <li><span>Vegetable Stir Fry</span> <span>...... $8.99</span></li>
            <li><span>Seafood Platter</span> <span>.... $20.99</span></li>
            <li><span>Caesar Salad</span> <span>...... $7.99</span></li>
            <li><span>Chocolate Cake</span> <span>...... $5.99</span></li>
            <li><span>Ice Cream Sundae</span> <span>...... $4.99</span></li>
            <li><span>Soft Drinks</span> <span>...... $2.99</span></li>
            <li><span>Beer</span> <span>...... $4.99</span></li>
            <li><span>Wine</span> <span>...... $6.99</span></li>
            </ul>
            <p>All prices are in USD.</p>
            <p>For reservations, please call us at (123) 456-7890.</p>
            <p>We look forward to serving you!</p>
        </div>
    </div>`;
    console.log("Menu page rendered");
}
