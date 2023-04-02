import { Box, Typography } from '@mui/material'
import {Formik,Form,Field} from 'formik'

const LeftPanel=({options,onOptionChange})=>{
console.log(options,'options')
    
    const ramoptions=[
        {value:'6',display:'6 GB AND MORE '},
        {value:'4',display:'4 GB '},
        {value:'3',display:'3 GB '},
        {value:'2',display:'2 GB '},
    ]
    const customerRating=[
        {value:'4',display:"4 ★ & ABOVE"},
        {value:'3',display:"3 ★ & ABOVE"},
        {value:'2',display:"2 ★ & ABOVE"},
        {value:'1',display:"1 ★ & ABOVE"},
    ]
    const brands=['Mi','RealMe','Samsung','OPPO','Apple']
    const price=['0-5000','5000-10000','10000-20000','20000']

    
    const handleChange=(e)=>{
        const {currentTarget:input}=e
        let options1=options
        // if(input.name === 'city' || input.name === 'company')
        options1[input.name]=updateCbs(options1[input.name],input.checked,input.value)
        // else options[input.name]=input.value
        onOptionChange(options)
      }
      
    const updateCbs=(inputValue,checked,value)=>{
        let inpArr=inputValue ? inputValue.split(","):[]
        if(checked) inpArr.push(value)
        else{
            let index=inpArr.findIndex((ele)=>ele===value)
            if(index>=0) inpArr.splice(index,1)
        }
        return inpArr.join(",")
    }

    return (
    <Box>
        <Typography style={{margin:10,fontSize:20}}>Filters</Typography>
        <hr style={{color:"#F2F2F2"}}/>
        <Formik initialValues={{
            brand:options?.brand?.split(',')||'',
            ram:options?.ram?.split(',')||'',
            // ram:[6,4,3],
            rating:options?.rating?.split(',')||'',
            price:options?.price?.split(',')||'',
            
            }}
            enableReinitialize
            
            >
            {()=>(
                <Form>     
                    <Box className="form-group">
                        <label style={{marginLeft:14}}><b>BRAND</b></label>
                        {brands.map(p=>(
                        <div className="form-check" style={{margin:10}} key={p}>
                            <Field name='brand' type='checkbox' onChange={handleChange} value={p}/>{p}
                        </div>
                        ))}
                        {/* <div className='text-danger'><ErrorMessage name='payments'/></div> */}
                    </Box>
                    <Box className="form-group">
                        <label style={{marginLeft:14}}><b>RAM</b></label>
                        {ramoptions.map(p=>(
                        <div className="form-check" style={{margin:10}} key={p.display}>
                            <Field name='ram' type='checkbox' value={p.value} onChange={handleChange}/>{p.display}
                        </div>
                        ))}
                        {/* <div className='text-danger'><ErrorMessage name='payments'/></div> */}
                    </Box>
                    <Box className="form-group">
                        <label style={{marginLeft:14}}><b>CUSTOMER RATING</b></label>
                        {customerRating.map(p=>(
                        <div className="form-check" style={{margin:10}} key={p.display}>
                            <Field name='rating' type='checkbox' value={p.value} onChange={handleChange}/>{p.display}
                        </div>
                        ))}
                        {/* <div className='text-danger'><ErrorMessage name='payments'/></div> */}
                    </Box>
                    <Box className="form-group">
                        <label style={{marginLeft:14}}><b>PRICE</b></label>
                        {price.map(p=>(
                        <div className="form-check" style={{margin:10}} key={p}>
                            <Field name='price' type='checkbox' value={p} onChange={handleChange} />{p==='20000'?'20000 AND ABOVE':p}
                        </div>
                        ))}
                        {/* <div className='text-danger'><ErrorMessage name='payments'/></div> */}
                    </Box>
                </Form>
            )}
        </Formik>
    </Box>)
}
export default LeftPanel