@app.route('/products')
def products():
    # You can pass a list of products here if needed
    all_products = [
        {"name": "Product 1", "description": "Description 1", "price": "$10"},
        {"name": "Product 2", "description": "Description 2", "price": "$20"}
    ]
    return render_template('products.html', products=all_products)
