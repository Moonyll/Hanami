namespace hanami.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("product")]
    public partial class product
    {
        [Key]
        public int id_product { get; set; }

        [Required]
        [StringLength(255)]
        public string name { get; set; }

        [Column(TypeName = "text")]
        [Required]
        public string description { get; set; }

        public double? price { get; set; }

        [Required]
        [StringLength(255)]
        public string reference { get; set; }

        public int id_category { get; set; }

        [Required]
        [StringLength(255)]
        public string url_image { get; set; }

        public virtual category category { get; set; }
    }
}
