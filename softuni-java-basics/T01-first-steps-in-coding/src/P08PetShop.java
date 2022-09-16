import java.util.Scanner;

public class P08PetShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int dogFood = Integer.parseInt(scanner.nextLine());
        int catFood = Integer.parseInt(scanner.nextLine());

        double cost = catFood * 4.00 + dogFood * 2.50;

        System.out.printf("%.1f lv.%n", cost);

    }
}
