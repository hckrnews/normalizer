# Normalize objects

[![NPM version][npm-image]][npm-url] [![Bugs][bugs-image]][bugs-url] [![Code Smells][code-smells-image]][code-smells-url] [![Duplicated Lines (%)][duplicate-lines-image]][duplicate-lines-url] [![Maintainability Rating][maintainability-rate-image]][maintainability-rate-url] [![Reliability Rating][reliability-rate-image]][reliability-rate-url] [![Security Rating][security-rate-image]][security-rate-url] [![Technical Debt][technical-debt-image]][technical-debt-url] [![Vulnerabilities][vulnerabilitiest-image]][vulnerabilitiest-url] [![Quality Gate Status][quality-gate-image]][quality-gate-url] [![Coverage][coverage-image]][coverage-url]

## Installation

`npm install @hckrnews/normalizer`
or
`yarn add @hckrnews/normalizer`

## Test the package

`npm run test`
or
`yarn test`

## Usage

```javascript
import makeNormalizer from '@hckrnews/normalizer';

const schema = {
    pim_sku: String,
    pim_productgroupname: String
}
const Normalizer = makeNormalizer({ schema })

const normalizer = new Normalizer()

const rawData = [
    {
        pim_sku: '123',
        pim_productgroupname: 'Bike'
    }
]
normalizer.data = rawData

const mapping = (data) => ({
    sku: data.pim_sku,
    group: {
        name: data.pim_productgroupname
    }
})
normalizer.mapping = mapping

normalizer.normalizedData

[
    {
        sku: '123',
        group: {
            name: 'Bike'
        }
    }
]
```

[npm-url]: https://www.npmjs.com/package/@hckrnews/normalizer
[npm-image]: https://img.shields.io/npm/v/@hckrnews/normalizer.svg

[bugs-url]: https://sonarcloud.io/project/issues?id=hckrnews_normalizer&resolved=false&types=BUG
[bugs-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_normalizer&metric=bugs

[code-smells-url]: https://sonarcloud.io/project/issues?id=hckrnews_normalizer&resolved=false&types=CODE_SMELL
[code-smells-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_normalizer&metric=code_smells

[duplicate-lines-url]: https://sonarcloud.io/component_measures?id=hckrnews_normalizer&metric=duplicated_lines_density&view=list
[duplicate-lines-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_normalizer&metric=duplicated_lines_density

[maintainability-rate-url]: https://sonarcloud.io/project/issues?id=hckrnews_normalizer&resolved=false&types=CODE_SMELL
[maintainability-rate-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_normalizer&metric=sqale_rating

[reliability-rate-url]: https://sonarcloud.io/component_measures?id=hckrnews_normalizer&metric=Reliability
[reliability-rate-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_normalizer&metric=reliability_rating

[security-rate-url]: https://sonarcloud.io/project/security_hotspots?id=hckrnews_normalizer
[security-rate-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_normalizer&metric=security_rating

[technical-debt-url]: https://sonarcloud.io/component_measures?id=hckrnews_normalizer
[technical-debt-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_normalizer&metric=sqale_index

[vulnerabilitiest-url]: https://sonarcloud.io/project/issues?id=hckrnews_normalizer&resolved=false&types=VULNERABILITY
[vulnerabilitiest-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_normalizer&metric=vulnerabilities

[quality-gate-url]: https://sonarcloud.io/summary/new_code?id=hckrnews_normalizer
[quality-gate-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_normalizer&metric=alert_status

[coverage-url]: https://sonarcloud.io/component_measures?id=hckrnews_normalizer&metric=coverage&view=list
[coverage-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_normalizer&metric=coverage

