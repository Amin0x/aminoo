@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double price;
    private double price2;
    private String tags;
    private Long vendorId;

    // Getters and Setters
}
