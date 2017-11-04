import 'jest'
import App from './index'

describe('app', () => {
    it('should add correctly', () => {
        const app = new App()
        expect(app.add(1, 2)).toEqual(3)
    })
    it('should subtract correctly', () => {
        const app = new App()
        expect(app.add(2, 1)).toEqual(1)
    })
})
