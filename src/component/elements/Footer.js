const FooterComponent=(props)=>{
    const year = new Date().getFullYear().toString();
    return(
        <div className="footer py-3">
            <div class="row px-3"> 
                <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; {year}. All rights reserved.</small>
            </div>
        </div>
    )
}
export default FooterComponent;