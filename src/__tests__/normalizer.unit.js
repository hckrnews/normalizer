import { expect, describe, it } from '@jest/globals';
import makeNormalizer from '../normalizer.js';

describe('Filter', () => {
    it('It should work', () => {
        const schema = {
            pim_sku: String,
            pim_productgroupname: String,
        };
        const productSchema = {
            sku: String,
            group: {
                name: String,
            },
        };
        const rawData = [
            {
                pim_sku: '123',
                pim_productgroupname: 'Bike',
            },
        ];
        const mapping = (data) => ({
            sku: data.pim_sku,
            group: {
                name: data.pim_productgroupname,
            },
        });
        const Normalizer = makeNormalizer({
            schemaFrom: schema,
            schemaTo: productSchema,
        });
        const normalizer = new Normalizer({ data: rawData, mapping });
        normalizer.data = rawData;
        normalizer.mapping = mapping;
        const expected = [
            {
                sku: '123',
                group: {
                    name: 'Bike',
                },
            },
        ];
        expect(normalizer.normalizedData).toEqual(expected);
        expect(normalizer.data).toEqual(rawData);
        expect(normalizer.mapping).toEqual(mapping);
    });

    it('It should also work', () => {
        const schema = {
            pim_sku: String,
            pim_productgroupname: String,
        };
        const productSchema = {
            sku: String,
            group: {
                name: String,
            },
        };
        const rawData = [
            {
                pim_sku: '123',
                pim_productgroupname: 'Bike',
            },
        ];
        const mapping = (data) => ({
            sku: data.pim_sku,
            group: {
                name: data.pim_productgroupname,
            },
        });
        const Normalizer = makeNormalizer({
            schemaFrom: schema,
            schemaTo: productSchema,
        });
        const normalizer = new Normalizer({ data: rawData, mapping });

        const expected = [
            {
                sku: '123',
                group: {
                    name: 'Bike',
                },
            },
        ];
        expect(normalizer.normalizedData).toEqual(expected);
        expect(normalizer.data).toEqual(rawData);
        expect(normalizer.mapping).toEqual(mapping);
    });

    it('It should throw an exception if the mapping isnt a function', () => {
        const Normalizer = makeNormalizer({ schemaFrom: {}, schemaTo: {} });

        expect(() => {
            // eslint-disable-next-line no-new
            new Normalizer({ data: [], mapping: 42 });
        }).toThrowError('Mapping must be a function');
    });

    it('It should throw an exception if the data isnt valid by the schema', () => {
        const schema = {
            pim_sku: String,
            pim_productgroupname: String,
        };
        const rawData = [
            {
                pim_sku: 123,
                pim_productgroupname: 'Bike',
            },
        ];

        const Normalizer = makeNormalizer({ schemaFrom: schema, schemaTo: {} });

        expect(() => {
            // eslint-disable-next-line no-new
            new Normalizer({ data: rawData, mapping: () => null });
        }).toThrowError('The field pim_sku should be a String');
    });
});
