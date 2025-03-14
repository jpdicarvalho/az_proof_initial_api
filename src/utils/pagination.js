export function validatePageQuery(pageQuery) {
    let page = parseInt(pageQuery, 10);
    
    if (isNaN(page) || page < 1) {
      return 1; // Se for inválido ou menor que 1, define como 1
    }
    
    return page;
}  