export const Header = () => {

  const handleClick = (e) => {

    if(e.target.checked){
      document.documentElement.classList.add('dark');
    } else{
      document.documentElement.classList.remove('dark');
    }

  }

  return (
    <header className="bg-very-pale-blue dark:bg-very-dark-blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] md:mb-[480px] xl:mb-[200px]">

        <h1 className="text-very-dark-blue dark:text-very-pale-blue text-2xl font-bold mb-1">Social Media Dashboard</h1>
        <p className="text-dark-grayish-blue dark:text-desaturated-blue font-bold mb-6">Total Followers: 23,004</p>
        <hr className="bg-black mb-[19px]" />

        <div className="flex justify-between">

            <p className="text-dark-grayish-blue font-bold">Dark Mode</p>
            <label htmlFor="darkmode" className="border relative bg-toggle w-12 h-6 rounded-full overflow-hidden cursor-pointer p-[3px]">
              <input id="darkmode" type="checkbox" className="peer sr-only" onChange={handleClick}/>
              <div className="w-full h-full  peer-checked:bg-toggle-gradient absolute top-0 left-0"></div>
              <div className="w-[18px] h-[18px] bg-light-grayish-blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
            </label>
            
        </div>

    </header>
  )
}