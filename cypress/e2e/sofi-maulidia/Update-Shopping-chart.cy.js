describe('Update Shopping Cart', () => {
    it('update product quantity in cart', () => {
      // Kunjungi halaman utama
      cy.visit('https://magento.softwaretestingboard.com/')
  
      // Login
      cy.get('.panel > .header > .authorization-link > a').click();
      cy.get('#email').type('sofimaulidia24@gmail.com');
      cy.get('#pass').type('Rahasia123!');
      cy.get('#send2').click();
  
      // Pilih kategori dan produk
      cy.get('li.nav-3').find('a').contains('Men').click();
      cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click();
      cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
      cy.get('#option-label-size-143-item-167').click();
      cy.get('#option-label-color-93-item-49').click();
      cy.get('#product-addtocart-button').click();
  
      // Verifikasi produk ada di keranjang
      cy.get('.message-success').should('be.visible').and('contain.text', 'Proteus Fitness Jackshirt');
      cy.get('.minicart-wrapper').click();
  
      // Ambil jumlah produk yang ada saat ini dan simpan ke variabel
    let currentQty; // Deklarasi variabel di luar
    cy.get('.cart-item-qty').then(($qty) => {
      currentQty = parseInt($qty.val(), 10);  // Mengambil jumlah produk saat ini
      cy.wrap($qty).clear().type(currentQty + 1);   // Menambah 1 pada jumlah produk
    });
  
    // Klik tombol update
    cy.get('.update-cart-item').click();
  
   // Verifikasi bahwa tombol update tidak terlihat lagi setelah update
  cy.get('.update-cart-item').should('not.be.visible');  // Pastikan tombol tidak terlihat
  });
});
  
  