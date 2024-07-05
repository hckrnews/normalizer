import { Obj } from '@trojs/objects';

/**
 * Normalizes data and validates it against a schema.
 *
 * @param {object} data
 * @param {object} data.schemaFrom
 * @param {object} data.schemaTo
 *
 * @return {Normalizer}
 */
export default ({ schemaFrom, schemaTo }) => {
    const RawProduct = Obj({ schema: schemaFrom });
    const Product = Obj({ schema: schemaTo });

    return class Normalizer {
        /** @type {string[]} data */
        #data = [];

        /** @type {function} mapping */
        #mapping = null;

        /**
         * Normalize the data.
         * @param {object} params
         * @param {object[]} params.data
         * @param {function} params.mapping
         */
        constructor({ data, mapping }) {
            this.data = data;
            this.mapping = mapping;
        }

        /**
         * Set the data to be normalized.
         *
         * @param {object[]} data
         */
        set data(data) {
            this.#data = RawProduct.createAll(data);
        }

        /**
         * Get the data to be normalized.
         *
         * @return {object[]} data
         */
        get data() {
            return this.#data;
        }

        /**
         * Set the normalize function.
         *
         * @param {function} mapping
         */
        set mapping(mapping) {
            if (mapping.constructor !== Function) {
                throw new Error('Mapping must be a function');
            }

            this.#mapping = mapping;
        }

        /**
         * Get the normalize function.
         *
         * @return {function} mapping
         */
        get mapping() {
            return this.#mapping;
        }

        /**
         * Get the normalized data.
         *
         * @return {object[]} normalizedData
         */
        get normalizedData() {
            return this.#data.map(this.normalizeData.bind(this));
        }

        /**
         * Normalize the data.
         *
         * @param {object} dataValue
         *
         * @return {object} normalizedData
         */
        normalizeData(dataValue) {
            return Product.create(this.#mapping(dataValue));
        }
    };
};
