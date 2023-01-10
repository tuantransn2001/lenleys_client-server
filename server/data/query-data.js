const handleQueryGetProductWithOptions = (id) => {
  console.log("id: ", id);
  return `
    select 
        products.id as product_id, 
	    products.product_description, 
        products.product_imgSrc, 
        options.id as option_id,
        options.option_name,
        options.option_description,
        images.id as image_option_item_id,
        images.image_title as image_item_title,
	    images.image_description as image_item_description,
        images.image_src as image_item_src
    from lenleys_database.products 
    left join lenleys_database.options
    on lenleys_database.products.id = lenleys_database.options.product_id
    right join lenleys_database.images
    on lenleys_database.options.id = lenleys_database.images.option_id
    where products.id is not null and products.id = ${id}
    `;
};

module.exports = { handleQueryGetProductWithOptions };
