import java.util.Scanner;

public class P04eVacationBooksList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int pagesPerBook = Integer.parseInt(scanner.nextLine());
        int pagesPerHour = Integer.parseInt(scanner.nextLine());
        int daysToRead = Integer.parseInt(scanner.nextLine());

        int pagesPerDayToFinish = (pagesPerBook / daysToRead) / pagesPerHour;

        System.out.println(pagesPerDayToFinish);
    }
}
