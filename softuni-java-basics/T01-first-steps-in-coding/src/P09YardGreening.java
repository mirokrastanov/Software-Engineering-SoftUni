import java.util.Scanner;

public class P09YardGreening {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double sqmToDo = Double.parseDouble(scanner.nextLine());
        double greeningCost = sqmToDo * 7.61;
        double discount = greeningCost * 0.18;
        double greeningTotal = greeningCost - discount;

        System.out.printf("The final price is: %.2f lv.%n", greeningTotal);
        System.out.printf("The discount is: %.2f lv.%n", discount);


    }
}
