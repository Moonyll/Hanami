namespace hanami.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model_Hanami : DbContext
    {
        public Model_Hanami()
            : base("name=Model_Hanami")
        {
        }

        public virtual DbSet<category> category { get; set; }
        public virtual DbSet<product> product { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<category>()
                .HasMany(e => e.product)
                .WithRequired(e => e.category)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<product>()
                .Property(e => e.description)
                .IsUnicode(false);
        }
    }
}
