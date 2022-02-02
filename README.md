# Create vanilla JavaScript enums

[![NPM version][npm-image]][npm-url] [![Bugs][bugs-image]][bugs-url] [![Code Smells][code-smells-image]][code-smells-url] [![Duplicated Lines (%)][duplicate-lines-image]][duplicate-lines-url] [![Maintainability Rating][maintainability-rate-image]][maintainability-rate-url] [![Reliability Rating][reliability-rate-image]][reliability-rate-url] [![Security Rating][security-rate-image]][security-rate-url] [![Technical Debt][technical-debt-image]][technical-debt-url] [![Vulnerabilities][vulnerabilitiest-image]][vulnerabilitiest-url] [![Quality Gate Status][quality-gate-image]][quality-gate-url] [![Coverage][coverage-image]][coverage-url]

## Installation

`npm install @hckrnews/enum`
or
`yarn add @hckrnews/enum`

## Test the package

`npm run test`
or
`yarn test`

## Usage

```javascript
import Enum from '@hckrnews/enum'

class Example extends Enum {
  static test = 'TEXT'
  static another = 42
}

Example.test // 'TEXT'
Example.options // { test: 'TEXT', another: 42 }
Example.options.test // 'TEXT'

const example = Example.fromKey('test')
example.key // 'test'
example.value // 'TEXT'
example.values // [ 'TEXT', 42 ]
example.keys // [ 'test', 'another ]
example.test // 'TEXT'
example.another // 42
example.length // 2
example.name // 'Example'

example.is(Example.test) // true
example.is('TEXT') // true
example.is(42) // false
example.in([Example.test]) // true
example.in(['TEXT']) // true
example.in([42]) // false

example.valueOf() // 42
example.toString() // 'test'
example.toJSON() // 'test'
JSON.stringify(example) // '"test"'

const example = Example.create('test')
example.key // 'test'
example.value // 'TEXT'

const example = Example.fromValue('TEXT')
example.key // test
example.value // TEXT

Example.hasKey('test') // teue
Example.hasKey('TEXT') // false
Example.hasValue('test') // teue
Example.hasValue('TEXT') // false

Example.toJSON() // { test: 'TEXT', another: 42 }
JSON.stringify(Example) // '{"test":"TEXT","another":42}'

const example = Example.create('test', { output: 'value' })
example.valueOf() // 42
example.toString() // '42'
example.toJSON() // 42
JSON.stringify(example) // '42'
```

[npm-url]: https://www.npmjs.com/package/@hckrnews/enum
[npm-image]: https://img.shields.io/npm/v/@hckrnews/enum.svg

[bugs-url]: https://sonarcloud.io/project/issues?id=hckrnews_enum&resolved=false&types=BUG
[bugs-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_enum&metric=bugs

[code-smells-url]: https://sonarcloud.io/project/issues?id=hckrnews_enum&resolved=false&types=CODE_SMELL
[code-smells-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_enum&metric=code_smells

[duplicate-lines-url]: https://sonarcloud.io/component_measures?id=hckrnews_enum&metric=duplicated_lines_density&view=list
[duplicate-lines-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_enum&metric=duplicated_lines_density

[maintainability-rate-url]: https://sonarcloud.io/project/issues?id=hckrnews_enum&resolved=false&types=CODE_SMELL
[maintainability-rate-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_enum&metric=sqale_rating

[reliability-rate-url]: https://sonarcloud.io/component_measures?id=hckrnews_enum&metric=Reliability
[reliability-rate-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_enum&metric=reliability_rating

[security-rate-url]: https://sonarcloud.io/project/security_hotspots?id=hckrnews_enum
[security-rate-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_enum&metric=security_rating

[technical-debt-url]: https://sonarcloud.io/component_measures?id=hckrnews_enum
[technical-debt-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_enum&metric=sqale_index

[vulnerabilitiest-url]: https://sonarcloud.io/project/issues?id=hckrnews_enum&resolved=false&types=VULNERABILITY
[vulnerabilitiest-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_enum&metric=vulnerabilities

[quality-gate-url]: https://sonarcloud.io/summary/new_code?id=hckrnews_enum
[quality-gate-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_enum&metric=alert_status

[coverage-url]: https://sonarcloud.io/component_measures?id=hckrnews_enum&metric=coverage&view=list
[coverage-image]: https://sonarcloud.io/api/project_badges/measure?project=hckrnews_enum&metric=coverage

