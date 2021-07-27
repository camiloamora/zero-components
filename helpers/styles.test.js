import { getDynamicClasses, getModuleClasses } from './styles'

const stylesModuleMock = {
  ['size-sm']: '.xyz_size_sm',
  ['color-red']: '.xyz_color_red',
}
const propsMock = { size: 'sm', color: 'red' }

describe('[helpers / styles ]', () => {
  describe('#getDynamic Classes', () => {
    describe('when `arg` is an a array of classes with the all `props` matching', () => {
      it('should returns the classes with the `stylesModule` with the `prop` value', () => {
        // given
        const argMock = ['size', 'color']
        // when
        const result = getDynamicClasses(stylesModuleMock, propsMock, argMock)
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
        const result = getDynamicClasses(stylesModuleMock, propsMock, argMock)
        const expected = {}
        expect(result).toEqual(expected)
      })
    })
  })

  describe('#getDynamic Classes', () => {
    describe('when `arg` is an a array of classes with the `props` matching', () => {
      it('should returns an empty object', () => {
        const argMock = ['type', 'color']
        const result = getDynamicClasses(stylesModuleMock, propsMock, argMock)
        const expected = { '.xyz_color_red': 'red' }
        expect(result).toEqual(expected)
      })
    })
  })

  describe('#getModule Classes', () => {
    describe('when `styleModule` contain `arg`', () => {
      it('should returns `stylesModule.arg` value', () => {
        // given
        const argMock = 'size-sm'
        const result = getModuleClasses(stylesModuleMock, argMock)
        const expected = '.xyz_size_sm'
        expect(result).toBe(expected)
      })
    })

    describe("when `styleModule` doesn't contain `arg`", () => {
      it('should returns `arg` value', () => {
        // given
        const argMock = 'type-primary'
        const result = getModuleClasses(stylesModuleMock, argMock)
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

  describe('#getObject Classes', () => {})

  describe('#getClasses', () => {})
})

//given
//when
//then
