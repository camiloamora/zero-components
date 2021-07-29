import {
  getClasses,
  getDynamicClasses,
  getModuleClasses,
  getObjectClasses,
} from './styles'

const cssModuleMock = {
  ['size-sm']: '.xyz_size_sm',
  ['color-red']: '.xyz_color_red',
  ['is-editable']: '.xyz_is_editable',
  ['is-inverted']: '.xyz_is_inverted',
}
const propsMock = { size: 'sm', color: 'red' }

jest.mock('classnames', () => ({
  __esModule: true,
  default: (value) => value,
}))

describe('[helpers / styles ]', () => {
  describe('#getDynamic Classes', () => {
    describe('when `arg` is an a array of classes with the all `props` matching', () => {
      it('should returns the classes with the `stylesModule` with the `prop` value', () => {
        // given
        const argMock = ['size', 'color']
        // when
        const result = getDynamicClasses(cssModuleMock, propsMock, argMock)
        // then
        const expected = { '.xyz_size_sm': 'sm', '.xyz_color_red': 'red' }
        expect(result).toEqual(expected)
      })
    })
  })

  describe('#getDynamic Classes', () => {
    describe('when `arg` is an a array of classes with the `props` not matching', () => {
      it('should returns an empty object', () => {
        const argMock = ['type', 'width']
        const result = getDynamicClasses(cssModuleMock, propsMock, argMock)
        const expected = {}
        expect(result).toEqual(expected)
      })
    })
  })

  describe('#getDynamic Classes', () => {
    describe('when `arg` is an a array of classes with the `props` matching', () => {
      it('should returns an empty object', () => {
        const argMock = ['type', 'color']
        const result = getDynamicClasses(cssModuleMock, propsMock, argMock)
        const expected = { '.xyz_color_red': 'red' }
        expect(result).toEqual(expected)
      })
    })
  })
})

describe('#getObject Classes', () => {
  describe('when the `object` match some `cssModule` class', () => {
    it('should call `getDynamicClasses`', () => {
      // given
      const args = { 'is-editable': true, 'is-inline': true }
      // when
      const result = getObjectClasses(cssModuleMock, args)
      // then
      const expected = { '.xyz_is_editable': true }

      expect(result).toStrictEqual(expected)
    })
  })

  describe('#getModule Classes', () => {
    describe('when `styleModule` contain `arg`', () => {
      it('should returns `stylesModule.arg` value', () => {
        // given
        const argMock = 'size-sm'
        const result = getModuleClasses(cssModuleMock, argMock)
        const expected = '.xyz_size_sm'
        expect(result).toBe(expected)
      })
    })

    describe("when `styleModule` doesn't contain `arg`", () => {
      it('should returns `arg` value', () => {
        // given
        const argMock = 'type-primary'
        const result = getModuleClasses(cssModuleMock, argMock)
        const expected = 'type-primary'
        expect(result).toBe(expected)
      })
    })

    describe('when `styleModule` is null', () => {
      it('should returns `arg` value', () => {
        // given
        const argMock = 'size-sm'
        const result = getModuleClasses(null, argMock)
        const expected = 'size-sm'
        expect(result).toBe(expected)
      })
    })

    describe('when `styleModule` is undefined', () => {
      it('should returns `arg` value', () => {
        // given
        const argMock = 'size-sm'
        const result = getModuleClasses(undefined, argMock)
        const expected = 'size-sm'
        expect(result).toBe(expected)
      })
    })
  })

  describe('#getClasses', () => {
    describe('when `arg`is an array', () => {
      it('should call `getDynamicClasses`', () => {
        // given
        const args = ['size', 'color']
        // when
        const result = getClasses(cssModuleMock)(propsMock)(args)
        // then
        const expected = [{ '.xyz_size_sm': 'sm', '.xyz_color_red': 'red' }]

        expect(result).toStrictEqual(expected)
      })
    })
    describe('when `arg`is an string', () => {
      it('should call `getDynamicClasses`', () => {
        // given
        const args = 'size-sm'
        // when
        const result = getClasses(cssModuleMock)(propsMock)(args)
        // then
        const expected = ['.xyz_size_sm']

        expect(result).toStrictEqual(expected)
      })
    })

    describe("when `arg` is an string and `cssModules` doesn't contain the `classKey`", () => {
      it('should call `classnames`', () => {
        // given
        const args = 'width-full'
        // when
        const result = getClasses(cssModuleMock)(propsMock)(args)
        // then
        const expected = ['width-full']

        expect(result).toStrictEqual(expected)
      })
    })

    describe('when `arg`is an object', () => {
      it('should call `getObjectClasses`', () => {
        // given
        const args = { 'is-editable': true, 'is-block': true }
        // when
        const result = getObjectClasses(cssModuleMock, args)
        // then
        const expected = { '.xyz_is_editable': true }

        expect(result).toStrictEqual(expected)
      })
    })
  })
})

//given
//when
//then
