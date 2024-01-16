import* as Yup from 'yup'
 const signUpScheema=Yup.object({

    Firstname:Yup.string().required("first Name is required"),
    Lastname:Yup.string().required("Last Name is required").min(6,"Atleast 6 charecter")


})
export default signUpScheema