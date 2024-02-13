
public class MethodsDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MethodsDemo d = new MethodsDemo();
	String name= 	getData();
	System.out.println(name);
	MethodsDemo2 d1= new MethodsDemo2();
	String s2 = d1.getUserData();
	System.out.println(s2);;
	getData2();

	}
	
	public static String getData()
	{
	System.out.println("Hello world");	
	return "kun hcen";
	}
	
	public static String getData2()
	{
		System.out.println("Hello world");	
		return "kun hcen";
		
	}

}
