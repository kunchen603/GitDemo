import java.util.ArrayList;

public class CoreJavaBrushup2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int [] arr2= {1,2,4,5,6,7,77777,7777777};
		for(int i=0; i<arr2.length;i++)
		{
			if(arr2[i]%2 ==0)
			{
				System.out.println(arr2[i]);
			}
			else {
				System.out.println(arr2[i]+"is not multiple of 2");
			}
		
		}
		ArrayList<String> a = new ArrayList();
		//create object object.method
		a.add("kun");
		a.add("chen");
		a.add("strong");
		a.add("strong again");
		System.out.println(a.get(0));
		

	}

}
