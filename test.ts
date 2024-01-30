import {differentialPayments} from './src/App'

test('sadfasdf', ()=>{
    expect(differentialPayments(100000, 10, 20, new Date())).toBe(1234)
})