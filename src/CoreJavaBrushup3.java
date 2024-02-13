
public class CoreJavaBrushup3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//string is an object
		String s4="kun chen cool";
		String s1= "kun chen cool";
		
		String s2 = new String("Welcome");
		String s3= new String ("Welcome");
		
		String s = "kun chen cool";
	 String [] splittedString=	s.split("chen");
	 
	 System.out.println(splittedString[0]);
	 System.out.println(splittedString[1].trim());
	 for(int i=0; i<s.length(); i++)
	 {
		 System.out.println(s.charAt(i));
	 }
	 

	}

}
