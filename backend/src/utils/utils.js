class Utils {
   /**
   * Transforma string para ser sensível a acentos.
   */
    diacriticSensitiveRegex = (string = '') => {
        return string
            .replace(/a/g, '[a,á,à,ä,â,ã]')
            .replace(/A/g, '[a,á,à,ä,â,ã]')
            .replace(/e/g, '[e,é,ë,è]')
            .replace(/E/g, '[e,é,ë,è]')
            .replace(/i/g, '[i,í,ï,ì]')
            .replace(/I/g, '[i,í,ï,ì]')
            .replace(/o/g, '[o,ó,ö,ò,õ]')
            .replace(/O/g, '[o,ó,ö,ò,õ]')
            .replace(/u/g, '[u,ü,ú,ù]')
            .replace(/U/g, '[u,ü,ú,ù]')
            .replace(/c/g, '[c,ç]')
            .replace(/C/g, '[c,ç]');
    };

    /**
     * Valida e converte a query `page` para um número inteiro positivo.
     */
    validatePageQuery(pageQuery) {
        let page = parseInt(pageQuery, 10);
        return isNaN(page) || page < 1 ? 1 : page;
    }

    /**
     * Valida e converte `start_date` e `end_date` para objetos Date válidos.
     */
    validateDateRange(start_date, end_date) {
        let startDate = start_date ? new Date(start_date) : null;
        let endDate = end_date ? new Date(end_date) : null;

        if (startDate && isNaN(startDate.getTime())) startDate = null;
        if (endDate && isNaN(endDate.getTime())) endDate = null;

        return { startDate, endDate };
    }

}

export default new Utils();
