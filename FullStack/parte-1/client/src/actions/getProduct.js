const getProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/product/${id}`);
      if (!res.ok) throw new Error(`Status: ${res.status}`);
      const json = await res.json();
      return { success: true, data: json };
    } catch (e) {
      console.error(e);
      return { success: false, data: e };
    }
  };
  
  export default getProduct;
  