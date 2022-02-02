import { expect, describe, it } from '@jest/globals'
import makeNormalizer from '../normalizer.js'

describe('Filter', () => {
  it('It should work', () => {
    const schema = {
      pim_sku: String,
      pim_productgroupname: String
    }
    const rawData = [
      {
        pim_sku: '123',
        pim_productgroupname: 'Bike'
      }
    ]
    const mapping = (data) => ({
      sku: data.pim_sku,
      group: {
        name: data.pim_productgroupname
      }
    })
    const Normalizer = makeNormalizer({ schema })
    const normalizer = new Normalizer()
    normalizer.data = rawData
    normalizer.mapping = mapping
    const expected = [
      {
        sku: '123',
        group: {
          name: 'Bike'
        }
      }
    ]
    expect(normalizer.normalizedData).toEqual(expected)
    expect(normalizer.data).toEqual(rawData)
    expect(normalizer.mapping).toEqual(mapping)
  })

  it('It should throw an exception if the mapping isnt a function', () => {
    const Normalizer = makeNormalizer({ schema: {} })
    const normalizer = new Normalizer()
      expect(() => {
        normalizer.mapping = 42
      }).toThrowError('Mapping must be a function')
  })

  it('It should throw an exception if the data isnt valid by the schema', () => {
    const schema = {
      pim_sku: String,
      pim_productgroupname: String
    }
    const rawData = [
      {
        pim_sku: 123,
        pim_productgroupname: 'Bike'
      }
    ]

    const Normalizer = makeNormalizer({ schema })
    const normalizer = new Normalizer()
      expect(() => {
        normalizer.data = rawData
      }).toThrowError('The field pim_sku should be a String')
  })
})
