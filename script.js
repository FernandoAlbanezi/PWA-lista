const checklist = document.getElementById('checklist');
const totalPriceElement = document.getElementById('total-price');

const products = {
    'Fraldas Pampers': 35.00,
    'Shampoo Elseve': 25.00,
    'Leite Parmalat': 3.19,
    'Pão Pullman': 2.99,
    'Arroz Tio João': 5.99,
    'Feijão Carioca': 4.49,
    'Batatas Fritas Ruffles': 6.50,
    'Iogurte Nestlé': 4.00,
    'Maçãs Gala': 2.50,
    'Cerveja Skol': 8.00,
    'Margarina Qualy': 6.00,
    'Café Pilão': 12.00,
    'Açúcar União': 3.50,
    'Macarrão Barilla': 7.50,
    'Molho de Tomate Heinz': 4.50,
    'Sabão em Pó Omo': 15.00,
    'Papel Higiênico Neve': 10.00,
    'Água Mineral Bonafont': 2.00,
    'Refrigerante Coca-Cola': 6.00,
    'Suco de Laranja Del Valle': 7.00,
    'Manteiga Aviação': 8.50,
    'Queijo Mussarela': 20.00,
    'Presunto Sadia': 18.00,
    'Peito de Frango Seara': 10.00,
    'Carne Moída Friboi': 22.00,
    'Biscoito Maizena': 3.00,
    'Ovo Caipira': 8.00,
    'Farinha de Trigo Dona Benta': 4.00,
    'Azeite de Oliva Gallo': 18.00,
    'Vinagre Castelo': 3.50,
    'Cebola': 2.00,
    'Alho': 1.50,
    'Tomate': 4.00,
    'Alface': 2.50,
    'Cenoura': 3.00,
    'Batata': 3.50,
    'Abobrinha': 3.00,
    'Pepino': 2.50,
    'Melancia': 1.00,
    'Banana': 2.00,
    'Uva': 5.00,
    'Laranja': 2.50,
    'Mamão': 3.00,
    'Morango': 6.00,
    'Limão': 3.00,
    'Hortelã': 1.50,
    'Salsa': 1.50,
    'Coentro': 1.50,
    'Orégano Kitano': 2.50,
    'Sal Cisne': 1.50,
    'Pimenta-do-reino Kitano': 5.00,
    'Detergente Ypê': 2.50,
    'Esponja de Limpeza Scotch-Brite': 3.00,
    'Sabonete Dove': 4.00,
    'Pasta de Dente Colgate': 3.50,
    'Escova de Dente Oral-B': 5.00,
    'Desodorante Rexona': 7.00,
    'Desinfetante Pinho Sol': 4.50,
    'Água Sanitária Qboa': 3.00,
    'Amaciante Comfort': 7.00,
    'Alvejante Vanish': 15.00,
    'Desodorante Axe': 8.00,
    'Creme de Pentear Pantene': 12.00,
    'Sabonete Líquido Nivea': 8.00,
    'Hidratante Johnson\'s': 10.00,
    'Absorvente Always': 5.00,
    'Fita Adesiva Scotch': 4.00,
    'Pilhas Duracell': 10.00,
    'Lâmpada LED Philips': 15.00,
    'Vassoura Bettanin': 7.00,
    'Rodo Bettanin': 5.00,
    'Pano de Chão Bombril': 3.00,
    'Balde Sanremo': 8.00,
    'Luva de Limpeza Scotch-Brite': 5.00,
    'Panela Tramontina': 100.00,
    'Faqueiro Tramontina': 50.00,
    'Copos de Vidro Nadir': 20.00,
    'Tábua de Corte Mor': 15.00,
    'Jarra de Vidro Nadir': 25.00,
    'Forma de Bolo Tramontina': 30.00,
    'Roupas de Cama Santista': 100.00,
    'Toalhas de Banho Karsten': 40.00,
    'Travesseiro Ortobom': 20.00,
    'Almofadas Decorativas': 25.00,
    'Cortina Santista': 50.00,
    'Tapete São Carlos': 70.00,
    'Pufes Decorativos': 80.00,
    'Colchão Ortobom': 200.00,
    'Aspirador de Pó Philco': 150.00,
    'Ferro de Passar Arno': 100.00,
    'Ventilador Mondial': 80.00,
    'Ar Condicionado LG': 1500.00,
    'Máquina de Lavar Brastemp': 1200.00,
    'Geladeira Consul': 1500.00,
    'Fogão Consul': 800.00,
    'Micro-ondas Electrolux': 300.00,
    'Liquidificador Arno': 100.00,
    'Batedeira Philco': 120.00,
    'Cafeteira Nespresso': 400.00,
    'Torradeira Philips': 150.00,
    'Feijão Preto': 4.99,
    'Lasanha Sadia': 15.00,
    'Sorvete Kibon': 20.00,
    'Chocolate Nestlé': 6.50,
    'Detergente em Pó Ariel': 13.00,
    'Creme Dental Sensodyne': 10.00,
    'Sabonete Líquido Lux': 8.00,
    'Adoçante Stevia': 7.00,
    'Aveia Quaker': 4.00,
    'Cereal Matinal Nestlé': 12.00
    // Continue adicionando mais produtos se necessário
};

async function addItem() {
    const itemInput = document.getElementById('item-input');
    const itemName = itemInput.value.trim();

    if (itemName === '') return;

    const price = products[itemName] || 0.0;

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" onchange="calculateTotal()">
        ${itemName} - R$${price.toFixed(2)}
        <button class="delete-button" onclick="deleteItem(this, ${price})">Apagar</button>
    `;

    checklist.appendChild(li);
    itemInput.value = '';
    calculateTotal();
}

function deleteItem(button, price) {
    const li = button.parentElement;
    li.remove();
    calculateTotal();
}

function calculateTotal() {
    const items = checklist.getElementsByTagName('li');
    let total = 0;
    for (let item of items) {
        const checkbox = item.getElementsByTagName('input')[0];
        if (!checkbox.checked) {
            const priceText = item.innerText.split('- R$')[1];
            total += parseFloat(priceText);
        }
    }
    totalPriceElement.innerText = `Total: R$${total.toFixed(2)}`;
}