import Obj from '@hckrnews/objects';

const productSchema = {
    sku: String,
};

const Product = Obj({ schema: productSchema });

export default ({ schema }) => {
    const RawProduct = Obj({ schema });

    return class Normalizer {
        /** @type {string[]} data */
        #data = [];

        /** @type {function} mapping */
        #mapping = null;

        set data(data) {
            this.#data = RawProduct.createAll(data);
        }

        get data() {
            return this.#data;
        }

        set mapping(mapping) {
            if (mapping.constructor !== Function) {
                throw new Error('Mapping must be a function');
            }

            this.#mapping = mapping;
        }

        get mapping() {
            return this.#mapping;
        }

        get normalizedData() {
            return this.#data.map(this.normalizeData.bind(this));
        }

        normalizeData(dataValue) {
            return Product.create(this.#mapping(dataValue));
        }
    };
};
