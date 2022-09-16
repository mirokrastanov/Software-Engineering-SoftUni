import java.util.Scanner;

public class P09eFishTank {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int length = Integer.parseInt(scanner.nextLine());
        int width = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());
        double percentMiscellaneous = Double.parseDouble(scanner.nextLine());
        double totalVolume = (length / 10.0) * (width / 10.0) * (height / 10.0);
        double waterVolume = totalVolume - totalVolume * percentMiscellaneous / 100;

        System.out.println(waterVolume);
    }
}
